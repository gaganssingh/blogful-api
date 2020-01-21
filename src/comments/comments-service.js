const CommentsService = {
	getAllComments(knex) {
		return knex.select("*").from("blogful_comments");
	},
	insertComments(knex, newComment) {
		// prettier-ignore
		return knex
            .into("blogful_comments")
            .insert(newComment)
            .returning("*")
            .then(rows => {
                return rows[0]
            });
	},
	getById(knex, id) {
		// prettier-ignore
		return knex
            .from("blogful_comments")
            .select("*")
            .where("id", id)
            .first();
	},
	deleteComment(knex, id) {
		// prettier-ignore
		return knex
            .from("blogful_comments")
            .where({ id })
            .delete();
	},
	updateComment(knex, id, newCommentFields) {
		// prettier-ignore
		return knex
            .from("blogful_comments")
            .where({ id })
            .update(newCommentFields);
	}
};

module.exports = CommentsService;
