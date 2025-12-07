'use server';
import { Product } from "../interfaces/ResponseApi";

/***
 * Función para obtener los productos desde la API externa.
 * Si se proporciona un término de búsqueda, filtra los productos por título.
 * @param searchProduct - Término de búsqueda para filtrar productos.
 * @returns Lista de productos filtrados o todos los productos si no hay término de búsqueda.
 */
export const getProducts = async (searchProduct: string) => {
    try {
        // Realiza la solicitud a la API externa para obtener los productos
        const products: Product[] = await fetch(`${process.env.PRODUCTS_URL_API}/products`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store'
        }).then(res => res.json()).catch(err => {
          console.error("Error fetching products:", err);
          return [];
        });

        // Verifica si se obtuvieron productos
        if(!products || products.length === 0){
            throw new Error('No products found');
        }

        // Si se proporciona un término de búsqueda, filtra los productos por título
        if(searchProduct){
            return products.filter(product => 
                product.title.toLowerCase().includes(searchProduct.toLowerCase())
            );
        }

        return products;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getProductById = async (productId: string) => {
    try {
        console.log(`${process.env.PRODUCTS_URL_API}/products/${productId}`);
      
        // Realiza la solicitud a la API externa para obtener el producto por ID
        const product: Product = await fetch(`${process.env.PRODUCTS_URL_API}/products/${productId}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          cache: 'no-store'
        }).then(res => res.json()).catch(err => {
          console.error(`Error fetching product with ID ${productId}:`, err);
          return null;
        });

        // Verifica si se obtuvo el producto
        if(!product){
            throw new Error(`Product with ID ${productId} not found`);
        }
        return product;
    } catch (error) {
        console.error(error);
        return null;
    }
}