select * from releases_dockerhub
where version != 'latest'
order by date desc