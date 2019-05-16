select username, workout_name, workout_id
from users, workouts
where user_id = users_id
order by workout_id desc
limit 5
