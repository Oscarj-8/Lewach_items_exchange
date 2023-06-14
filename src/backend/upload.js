const itemSchema = new mongoose.Schema({
    itemType: String,
    brandName: String,
    modelType: String,
    itemQuantity: Number,
    itemEstimatedValue: Number,
    itemDurationOfUsage: String,
    itemDefects: String,
    itemRegion: String,
    itemCityZone: String,
    itemSubcityWoreda: String,
    itemSpecificArea: String,
    itemsWillingToAccept: String,
    file: String
  });

  const Item = mongoose.model('Item', itemSchema);

  app.post('/upload', async (req, res) => {
    try {
      const newItem = await Item.create(req.body);
      res.status(201).send(newItem);
    } catch (error) {
      res.status(400).send(error);
    }
  });