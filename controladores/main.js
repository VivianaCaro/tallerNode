exports.home = (req,res) => {
    res.send("Welcome to Zombo.com");
    res.end();
}

exports.contacto = (req,res) => {
    res.send("Puedes contactarme al correo yo@ejemplo.cl");
    res.end();
}