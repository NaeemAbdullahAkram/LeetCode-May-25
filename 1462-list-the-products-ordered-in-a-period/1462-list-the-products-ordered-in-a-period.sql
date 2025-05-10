with feb_sales as (
    select product_id, sum(unit) as unit
    from Orders
    where order_date between '2020-02-01' and '2020-02-29'  
    group by product_id
)
select p.product_name, f.unit
from Products p join feb_sales f on p.product_id=f.product_id 
where f.unit>=100