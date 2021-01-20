import Contentstack from "contentstack";
const Stack = Contentstack.Stack(
  process.env.API_KEY,
  process.env.DELIVERY_TOKEN,
  process.env.ENVIRONMENT_NAME
);

const fetchData = ({ contentType, entryId = null }) => {
  try {
    const Query = Stack.ContentType(contentType);
    let entry;
    if (entryId === null) {
      entry = Query.Query()
        .toJSON()
        .find()
        .then(function success(result) {
          return result[0];
        });
      return entry;
    } else {
      entry = Query.Entry(entryId)
        .fetch()
        .then(
          function success(entry) {
            return entry.toJSON();
          },
          function error(err) {
            console.log("Error", err);
          }
        )
        .then(function success(result) {
          return result;
        });
      return entry;
    }
  } catch (err) {
    console.log("Error", err);
  }
};

export default fetchData;
