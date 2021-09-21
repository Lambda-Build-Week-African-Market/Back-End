
const checkBodyValid = (req, res, next) => {

    const {location, name, description, price} = req.body

    const isLocationValid = location && location.length > 0 && location.length < 65

    const isNameValid = name && name.length > 0 && location.length < 65

    const isDescriptionValid = description && description.length > 0 && description.length < 1000

    const isPriceValid = price && price > 0

    const isValid = isLocationValid && isNameValid && isDescriptionValid && isPriceValid

    if (isValid) {
        next()
    } else {
        res.status(401).json({message: 'Body is invalid'})
    }

}

module.exports = checkBodyValid