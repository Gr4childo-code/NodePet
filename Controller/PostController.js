import Post from '../Schema/PostSchema.js';
import PostService from '../Services/PostService.js';

class PostController {
	async create(req, res) {
		try {
			const post = await PostService.create(req.body, req.files.picture);
			res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getAll(req, res) {
		try {
			const posts = await PostService.getAll();
			return res.json(posts);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getOne(req, res) {
		try {
			const post = await PostService.getOne(req.params.id);
			return res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async update(req, res) {
		try {
			const updatePost = await PostService.update(req.body);
			return res.json(updatePost);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async delete(req, res) {
		try {
			const post = await PostService.delete(req.params.id);
			res.json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
export default new PostController();
