module.exports = (req, res , next ) => {

let url = req.path.replace('/','');
console.log(url)
next() 
}