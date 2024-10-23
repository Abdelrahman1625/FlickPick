import { User } from "../models/user.model.js";
export async function getFavorites(req, res) {
  const { id } = req.body;
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({ success: true, data: user.favorites });
  } catch (error) {
    console.log("Error in getFavorites controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function addFavorite(req, res) {
  const { id, content } = req.body;
  const user = User.findByIdAndUpdate(req.user._id);
  const exists = user.favorites?.some((item) => item.id === id);
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $addToSet: {
          favorites: { id, content },
        },
      },
      { new: true }
    );

    res.status(200).json({ success: true, data: user.favorites });
  } catch (error) {
    console.log("Error in addFavorite controller: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
export async function removeFavorite(req, res) {
  const { id } = req.params; // Extract id from the request body
  //   id = parseInt(id); // Convert id to a number
  try {
    // Find the user and pull the favorite with the matching id
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $pull: {
          favorites: { id: id }, // Remove the favorite item with the matching id
        },
      },
      { new: true } // Return the updated user document
    );
 
    // Check if the user was found and updated
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
 
    // Respond with the updated favorites list
    res.status(200).json({ success: true, data: user.favorites });
  } catch (error) {
    console.error("Error in removeFavorite controller:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}