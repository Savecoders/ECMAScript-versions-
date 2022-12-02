
const url = 'https://api.escuelajs.co/api/v1/products'

const responsive = await fetch(url)

const products = await responsive.json()

export default products