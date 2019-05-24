insert into workouts (workout_name, users_id, muscle)
values (${workout_name}, ${users_id}, ${muscle})
returning workout_id, workout_name, muscle