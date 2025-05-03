(
select name as results
From Users inner join MovieRating using(user_id)
group by user_id
order by COUNT(rating) DESC,name
limit 1
)

UNION all

(
select title as results
From Movies inner join MovieRating using(movie_id)
where MONTH(created_at)='02' and YEAR(created_at)='2020'
group by title
order by AVG(rating) DESC, title
limit 1
)