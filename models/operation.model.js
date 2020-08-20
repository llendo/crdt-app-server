module.exports = mongoose => {
    const Operation = mongoose.model(
        "operation",
        mongoose.Schema(
            {
                _id: String,
                name: String,
                store: String,
                object: String,
                key: String,
                value: String,
                timestamp: Number
            }
        )
    );
    return Operation;    
}
