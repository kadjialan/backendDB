/**
 * @swagger
 * components:
 *   schemas:
 *     glass:
 *       type: object
 *       required:
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The firstName of the glass
 *       example:
 *         id: 1
 *         name: small
 */

/**
 * @swagger
 * tags:
 *   name: glass
 *   description: The glass managing API
 * /glass:
 *   get:
 *     summary: Lists all the glass
 *     tags: [glass]
 *     responses:
 *       200:
 *         description: The list of the glass
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/glass'
 *   post:
 *     summary: Create a new glass
 *     tags: [glass]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/glass'
 *     responses:
 *       200:
 *         description: The created glass.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/glass'
 *       500:
 *         description: Some server error
 * /glass/{id}:
 *   get:
 *     summary: Get the glass by id
 *     tags: [glass]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *     responses:
 *       200:
 *         description: The glass response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/glass'
 *       404:
 *         description: The glass was not found
 *   put:
 *    summary: Update the glass by the id
 *    tags: [glass]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The glass id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/glass'
 *    responses:
 *      200:
 *        description: The glass was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/glass'
 *      404:
 *        description: The glass was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the glass by id
 *     tags: [glass]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The glass id
 *
 *     responses:
 *       200:
 *         description: The glass was deleted
 *       404:
 *         description: The glass was not found
 */

var express = require("express");
const {
  getAllGlasses,
  getGlass,
  postGlasses,
  putGlasses,
  patchGlasses,
  deleteGlasses,
} = require("../controller/glassController");
var router = express.Router();

router.get("/", getAllGlasses);

router.get("/:id", getGlass);

router.post("/", postGlasses);

router.put("/:id", putGlasses);

router.patch("/:id", patchGlasses);

router.delete("/:id", deleteGlasses);

module.exports = router;
