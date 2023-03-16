/**
 * @swagger
 * components:
 *   schemas:
 *     ingredient:
 *       type: object
 *       required:
 *         - email_address
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The firstName of the ingredient
 *         description:
 *           type: string
 *           description: The lasttName of the ingredient
 *       example:
 *         id: 1
 *         name: yeast
 *         description: many forms, from spherical to egg-shaped to filamentous. Most yeasts reproduce asexually by budding
 */

/**
 * @swagger
 * tags:
 *   name: ingredients
 *   description: The ingredients managing API
 * /ingredients:
 *   get:
 *     summary: Lists all the ingredients
 *     tags: [ingredients]
 *     responses:
 *       200:
 *         description: The list of the ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ingredient'
 *   post:
 *     summary: Create a new ingredients
 *     tags: [ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ingredient'
 *     responses:
 *       200:
 *         description: The created ingredient.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ingredient'
 *       500:
 *         description: Some server error
 * /ingredients/{id}:
 *   get:
 *     summary: Get the ingredients by id
 *     tags: [ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *     responses:
 *       200:
 *         description: The ingredient response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ingredient'
 *       404:
 *         description: The ingredient was not found
 *   put:
 *    summary: Update the ingredients by the id
 *    tags: [ingredients]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ingredient id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/ingredient'
 *    responses:
 *      200:
 *        description: The ingredient was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ingredient'
 *      404:
 *        description: The ingredient was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the ingredient by id
 *     tags: [ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ingredient id
 *
 *     responses:
 *       200:
 *         description: The ingredient was deleted
 *       404:
 *         description: The ingredient was not found
 */

var express = require("express");
const {
  getAllIngredients,
  getIngredient,
  postIngredients,
  putIngredient,
  patchIngredients,
  deleteIngredients,
} = require("../controller/ingredientsController");
var router = express.Router();

router.get("/", getAllIngredients);

router.get("/:id", getIngredient);

router.post("/", postIngredients);

router.put("/:id", putIngredient);

router.patch("/:id", patchIngredients);

router.delete("/:id", deleteIngredients);

module.exports = router;
