from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinkerPlus import config

engine = create_engine(config.database_uri) 

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT Bar, City, Phone, License FROM BarBeerDrinkerPlus.Bars;")
        return [dict(row) for row in rs]

def find_bar(name):
    with engine.connect() as con: 
        query = sql.text(
            "SELECT Bar, City, License, Phone FROM BarBeerDrinkerPlus.Bars WHERE Bar = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM BarBeerDrinkerPlus.MasterSells WHERE Price < :max_price;"
        )

        rs = con.execute(query, max_price=max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['Price'] = float(r['Price'])
        return results

def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.Bar, a.Type, a.Name, a.Price, b.Manufacturer, coalesce(c.like_count, 0) as likes \
                FROM MasterSells as a \
                JOIN Item AS b \
                ON a.Name = b.Name \
                LEFT OUTER JOIN (SELECT beer, count(*) as like_count FROM Likes GROUP BY beer) as c \
                ON a.Name = c.Beer \
                WHERE a.Bar = :bar \
                ORDER BY a.Type, a.Name; \
            ')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.Bar, a.Price, b.Customers \
                FROM MasterSells AS a \
                JOIN (SELECT bar, count(*) AS Customers FROM Frequents GROUP BY bar) as b \
                ON a.bar = b.Bar \
                WHERE a.Name = :beer \
                ORDER BY a.Price; \
            ')
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT Bar, count(*) as frequentCount \
                FROM Frequents \
                GROUP BY Bar \
                ORDER BY frequentCount desc; \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results

def get_bar_cities():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT City FROM Bars;')
        return [row['City'] for row in rs]

def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute('SELECT Name, Manufacturer FROM Item where Type = "beer";')
        return [dict(row) for row in rs]

def get_beer_manufacturers(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT Manufacturer FROM Item where Type = "beer";')
            return [row['Manufacturer'] for row in rs]

        query = sql.text('SELECT Manufacturer FROM Item WHERE Name = :beer;')
        rs = con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['Manufacturer']

def get_customers():
    with engine.connect() as con:
        rs = con.execute('SELECT Name, City, Phone FROM Customers;')
        return [dict(row) for row in rs]

def get_likes(customer_name):
    """Gets a list of beers liked by the drinker provided."""

    with engine.connect() as con:
        query = sql.text('SELECT Beer FROM Likes WHERE Customer = :name;')
        rs = con.execute(query, name=customer_name)
        return [row['Beer'] for row in rs]

def get_customer_info(customer_name):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM Customers WHERE name = :name;')
        rs = con.execute(query, name=customer_name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_customer_transactions(name):
    with engine.connect() as con:
        query=sql.text('SELECT * FROM BarBeerDrinkerPlus.Transactions t \
        where t.Customer = :name \
        order by \
        t.Bar, \
        STR_TO_DATE(Date,\'%m/%d/%y\'), \
        STR_TO_DATE(Time,\'%h:%i %p\'); \
            ')
        rs = con.execute(query, name=name)
        return [dict(row) for row in rs]

        
def get_customer_names():
    with engine.connect() as con:
        query=sql.text('SELECT distinct Customer FROM BarBeerDrinkerPlus.Transactions')
        rs = con.execute(query)
        return [dict(row) for row in rs]

def get_items(name, id):
     with engine.connect() as con:
        query = sql.text('Select i.type, i.Name, i.price from BarBeerDrinkerPlus.ItemsByID i \
         where i.ID = :id; \
         ')
        rs = con.execute(query, name = name, id=id)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_top_beers_bought(customer_name):
    with engine.connect() as con:
        query=sql.text('SELECT t.Customer, i.Name, count(*) as numBought \
            FROM Transactions t, ItemsByID i \
            WHERE t.ID = i.ID \
            AND Type = "Beer" \
            AND t.Customer = :name \
            GROUP BY i.Name \
            ORDER BY numBought desc \
            LIMIT 10 \
        ')
        rs = con.execute(query, name=customer_name)
        results =  [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['numBought'] = float(results[i]['numBought'])
        return results

def get_total_spending_per_day(customer_name):
    with engine.connect() as con:
        query=sql.text('SELECT t.Customer, t.Date, sum(TotalCost) as TotalSpent\
            FROM Transactions t\
            Where t.Customer = :name\
            Group by t.Customer, t.Date\
            order by STR_TO_DATE(Date,\'%m/%d/%y\')\
        ')
        rs = con.execute(query, name=customer_name)
        results =  [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['TotalSpent'] = float(results[i]['TotalSpent'])
        return results
        
def get_total_spending_per_bar(customer_name):
    with engine.connect() as con:
        query=sql.text(' SELECT t.Customer, t.Bar, ROUND(sum(TotalCost),2) as TotalSpent \
            FROM Transactions t \
            Where t.Customer = :name \
            Group by t.Customer, t.Bar \
            Order by TotalSpent desc \
        ')
        rs = con.execute(query, name=customer_name)
        results =  [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['TotalSpent'] = float(results[i]['TotalSpent'])
        return results

def get_top_spenders_per_bar(bar_name):
    with engine.connect() as con:
        query=sql.text('Select t.Customer, ROUND(sum(TotalCost),2) as TotalSpent \
            From Transactions t \
            Where t.Bar = :bar \
            Group by t.Customer \
            order by TotalSpent desc \
        ')
        rs = con.execute(query, bar = bar_name)
        results =  [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['TotalSpent'] = float(results[i]['TotalSpent'])
        return results

def get_top_beers_per_bar(bar_name):
    with engine.connect() as con:
        query=sql.text('SELECT i.Name, count(*) as numBought \
            FROM Transactions t, ItemsByID i \
            WHERE t.ID = i.ID \
            AND Type = "Beer" \
            AND t.Bar = :bar \
            GROUP BY i.Name \
            ORDER BY numBought desc \
            LIMIT 10; \
        ')
        rs = con.execute(query, bar = bar_name)
        results =  [dict(row) for row in rs]
        # for i, _ in enumerate(results):
        #     results[i]['numBought'] = float(results[i]['numBought'])
        return results

# EACH ROW IS THE PERCENT OF TOTAL SALES OF THE WEEKDAY OVER THE WHOLE TIME PERIOD
def get_hourly_sale_distribution(bar_name,weekday):
    with engine.connect() as con:
        query=sql.text('Select (HOUR(STR_TO_DATE(Time,\'%h:%i %p\'))) as Hour , count(*)/( \
                select sum(f.numPerHour) as total FROM ( \
                    Select (HOUR(STR_TO_DATE(Time,\'%h:%i %p\'))) as Hour , count(*) as numPerHour \
                    From Transactions t \
                    Where t.Bar = :bar \
                    AND t.Day = :day \
                    GROUP BY HOUR(STR_TO_DATE(Time,\'%h:%i %p\')) \
                    ) f \
                ) as percentPerHour \
            From Transactions t \
            Where t.Bar = :bar \
            AND t.Day = :day \
            GROUP BY HOUR(STR_TO_DATE(Time,\'%h:%i %p\')) \
        ')
        rs = con.execute(query, bar = bar_name, day=weekday)
        results =  [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['percentPerHour'] = float(results[i]['percentPerHour'])
        return results

def get_top_bars_per_beer(beer):
    with engine.connect() as con:
        query=sql.text('  Select t.Bar, count(*) as NumBought \
            From Transactions t, ItemsByID i \
            Where t.ID = i.ID AND \
            i.Name = :beer \
            Group by t.Bar \
            order by NumBought desc \
            limit 10 \
        ')
        rs = con.execute(query, beer = beer)
        results =  [dict(row) for row in rs]
        return results

def get_top_customers_per_beer(beer):
    with engine.connect() as con:
        query=sql.text('   Select t.Customer, count(*) as NumBought \
            From Transactions t, ItemsByID i \
            Where t.ID = i.ID AND \
            i.Name = :beer \
            Group by t.Customer \
            order by NumBought desc \
            limit 10 \
        ')
        rs = con.execute(query, beer = beer)
        results =  [dict(row) for row in rs]
        return results

def get_beer_sales_distribution(beer):
    with engine.connect() as con:
        query=sql.text(' Select (HOUR(STR_TO_DATE(Time,\'%h:%i %p\'))) as Hour, count(*) as NumBought \
            From Transactions t, ItemsByID i \
            Where t.ID = i.ID AND \
            i.Name = :beer \
            Group by Hour \
            order by Hour \
            limit 10 \
        ')
        rs = con.execute(query, beer = beer)
        results =  [dict(row) for row in rs]
        return results
        
def get_bartender_shifts(bartender,bar):
    with engine.connect() as con:
        query=sql.text('Select distinct t.Date, t.Day, b.ShiftStart, b.ShiftEnd \
            from Transactions t, Bartenders b \
            Where b.Bartender = :bartender \
            And b.Bar = :bar \
            and t.Day = b.Day \
        ')
        rs = con.execute(query, bartender=bartender, bar=bar)
        results =  [dict(row) for row in rs]
        return results

def get_top_beers_sold(bartender):
    with engine.connect() as con:
        query=sql.text('Select i.Name as BeerName, count(*) as numBeersSold \
            FROM Transactions t, Bartenders b, ItemsByID i \
            WHERE b.Bartender = :bartender \
            AND b.Bar = t.Bar \
            AND t.Day = b.Day \
            AND t.ID=i.ID \
            AND i.Type = "Beer" \
            AND ( \
                ( \
                    HOUR(STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\'))<12 AND \
                    ( \
                        ( HOUR(STR_TO_DATE(t.Time,\'%h:%i %p\')) >= HOUR(STR_TO_DATE(b.ShiftStart,\'%h:%i %p\')) ) \
                            OR \
                        (HOUR(STR_TO_DATE(t.Time,\'%h:%i %p\')) >= 0 AND STR_TO_DATE(t.Time,\'%h:%i %p\')<=STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\')) \
                    ) \
                ) \
                OR \
                ( \
                    (STR_TO_DATE(t.Time,\'%h:%i %p\') >= STR_TO_DATE(b.ShiftStart,\'%h:%i %p\') AND STR_TO_DATE(t.Time,\'%h:%i %p\') <= STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\')) \
                ) \
            ) \
            Group by i.Name \
            Order by numBeersSold desc \
        ')
        rs = con.execute(query, bartender=bartender)
        results =  [dict(row) for row in rs]
        return results

def get_shift_hours(bar):
    with engine.connect() as con:
        query = sql.text('SELECT s.Day, s.Open, s.Close from ShiftHours s Where s.Bar = :bar')
        rs = con.execute(query, bar=bar)
        results =  [dict(row) for row in rs]
        return results

def get_shifts_per_day(bar,day):
    with engine.connect() as con:
        query = sql.text('SELECT s.Open, s.Close from ShiftHours s Where s.Bar = :bar AND s.Day = :day')
        rs = con.execute(query, bar=bar, day=day)
        results =  [dict(row) for row in rs]
        return results

def get_bartender_analytics(bar,day,start,end):
    with engine.connect() as con:
        query = sql.text('Select b.Bartender, count(*) as totalBeersSold  \
            FROM Transactions t, Bartenders b, ItemsByID i, ShiftHours s \
            WHERE s.Bar = :bar \
			AND s.Day = :day \
			AND s.Open = :start \
			AND s.Close = :end \
            AND b.ShiftStart = s.Open \
            AND b.ShiftEnd = s.Close \
            And b.Bar = s.Bar \
            AND b.Day = s.Day \
            AND b.Bar = t.Bar \
            AND t.Day = b.Day \
            AND t.ID=i.ID \
            AND i.Type = "Beer" \
            AND ( \
                ( \
                    HOUR(STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\'))<12 AND  \
                    ( \
                        ( HOUR(STR_TO_DATE(t.Time,\'%h:%i %p\')) >= HOUR(STR_TO_DATE(b.ShiftStart,\'%h:%i %p\')) ) \
                            OR \
                        (HOUR(STR_TO_DATE(t.Time,\'%h:%i %p\')) >= 0 AND STR_TO_DATE(t.Time,\'%h:%i %p\')<=STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\')) \
                    ) \
                ) \
                OR \
                ( \
                    (STR_TO_DATE(t.Time,\'%h:%i %p\') >= STR_TO_DATE(b.ShiftStart,\'%h:%i %p\') AND STR_TO_DATE(t.Time,\'%h:%i %p\') <= STR_TO_DATE(b.ShiftEnd,\'%h:%i %p\')) \
                ) \
            ) \
            Group by b.Bartender \
            order by totalBeersSold \
        ')
        rs = con.execute(query, bar=bar, day=day, start=start, end=end)
        results =  [dict(row) for row in rs]
        return results