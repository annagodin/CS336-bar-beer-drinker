from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinkerPlus import config

engine = create_engine(config.database_uri) 



# BARS(name, city, phone,license,markup)
#     insert - NO CONSTRAINT
#     update - 
#     delete
# BARTENDERS(name, bar, day, start, end)
#     insert
#     update
#     delete
# CUSTOMERS(name,city,phone)
#     insert
#     update
#     delete
# ITEM(type,name,manf,base)
#     insert
#     update
#     delete
# FREQUENTS(customer,bar)
#     insert
#     update
#     delete
# ITEMSBYID(id,type,name,price)
#     insert
#     update
#     delete
# LIKES(customer,beer)
#     insert
#     update
#     delete
# MASTERSELLS(bar,item,base,markup,price)
#     insert
#     update
#     delete
# OPENHOURS(bar,open,close)
#     insert
#     update
#     delete
# STORES(bar,day,amount)
#     insert
#     update
#     delete
# TRANSACTIONS(Customer,Time,Date,Day,ID,Price,Tip,Bar,Bartender)
#     insert
#     update
