import captainModel from "../models/captain.model.js";

export const createCaptain = async (captainData) => {
    // Check if the email already exists in the database
    const existingCaptain = await captainModel.findOne({ email: captainData.email });

    if (existingCaptain) {
        // If the email is already in use, throw a custom error
        throw new Error('Email is already in use');
    }

    // Proceed with creating a new captain if the email is unique
    const captain = new captainModel({
        fullname: {
            firstname: captainData.firstname,
            lastname: captainData.lastname,
        },
        email: captainData.email,
        password: captainData.password,
        vehicle: {
            color: captainData.color,
            plate: captainData.plate,
            capacity: captainData.capacity,
            vehicleType: captainData.vehicleType,
        },
        status: 'inactive',  // default value for new captains
    });

    // Save the new captain and return it
    await captain.save();
    return captain;
};
