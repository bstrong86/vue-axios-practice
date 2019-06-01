insert into exercises (exercise_name, sets, workouts_id)
values (${exercise_name}, ${sets}, ${workouts_id})
returning exercise_name, sets, exercise_id