const UsersService = {
	getAllUsers(knex) {
		return knex.select("*").from("blogful_users");
	},
	insertUsers(knex, newUser) {
		// prettier-ignore
		return knex
            .insert(newUser)
            .into("blogful_users")
            .returning("*")
            .then(rows => {
                return rows[0]
            });
	},
	getById(knex, id) {
		// prettier-ignore
		return knex
            .from("blogful_users")
            .select("*")
            .where("id", id)
            .first();
	},
	deleteUser(knex, id) {
		// prettier-ignore
		return knex
            .from("blogful_users")
            .where({ id })
            .delete();
	},
	updateUser(knex, id, newUserFields) {
		// prettier-ignore
		return knex
            .from("blogful_users")
            .where({ id })
            .update(newUserFields);
	}
};

module.exports = UsersService;
