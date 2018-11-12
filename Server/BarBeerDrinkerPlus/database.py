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
<<<<<<< HEAD
=======

>>>>>>> 12799dd533044e626ee96530d8e62ef7b1291a93

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
        query=sql.text('SELECT * FROM BarBeerDrinkerPlus.Transactions \
        where Customer = :name \
        order by \
        STR_TO_DATE(Date,\'%m/%d/%y\'), \
        STR_TO_DATE(Time,\'%h:%i %p\'); \
            ')
        rs = con.execute(query, name=name)
        return [dict(row) for row in rs]

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
<<<<<<< HEAD
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
=======
>>>>>>> 12799dd533044e626ee96530d8e62ef7b1291a93
        return results