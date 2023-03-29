/**
 * @swagger
 * components:
 *   schemas:
 *     category:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *       example:
 *         id: 1
 *         name: beer
 *         description: many forms, from spherical to egg-shaped to filamentous. Most yeasts reproduce asexually by budding
 */

/**
 * @swagger
 * tags:
 *   name: category
 *   description: The category managing API
 * /category:
 *   get:
 *     summary: Lists all the category
 *     tags: [category]
 *     responses:
 *       200:
 *         description: The list of the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/category'
 *   post:
 *     summary: Create a new category
 *     tags: [category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/category'
 *     responses:
 *       200:
 *         description: The created category.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/category'
 *       500:
 *         description: Some server error
 * /category/{id}:
 *   get:
 *     summary: Get the category by id
 *     tags: [category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/category'
 *       404:
 *         description: The category was not found
 *   put:
 *    summary: Update the category by the id
 *    tags: [category]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/category'
 *    responses:
 *      200:
 *        description: The category was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/category'
 *      404:
 *        description: The category was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the category by id
 *     tags: [category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *
 *     responses:
 *       200:
 *         description: The category was deleted
 *       404:
 *         description: The category was not found
 */
var express = require("express");
const {
  getAllCategories,
  getCategory,
  putCategory,
  deleteCategory,
  postCategories,
  patchCategories,
} = require("../controller/categoryController");
var router = express.Router();

/* GET users listing. */
router.get("/", getAllCategories);

router.get("/:id", getCategory);

router.post("/", postCategories);

router.put("/:id", putCategory);

router.patch("/:id", patchCategories);

router.delete("/:id", deleteCategory);

module.exports = router;
