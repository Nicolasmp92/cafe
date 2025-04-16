package com.cafe.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.cafe.entity.ProductoEntity;
import com.cafe.repositoy.ProductoRepository;

@Service
public class ProductServiceImpl implements ProductService {

	private final ProductoRepository productRepository;

	public ProductServiceImpl(ProductoRepository productRepository) {
		this.productRepository = productRepository;
	}

	/**
	 * Obtiene la lista completa de productos almacenados.
	 *
	 * @return Lista de productos.
	 */
	@Override
	public List<ProductoEntity> obtenerProductos() {
		List<ProductoEntity> produtos = productRepository.findAll();
		return produtos;
	}

	/**
	 * Busca un producto por su ID.
	 *
	 * @param id ID del producto a buscar.
	 * @return Un Optional que puede contener el producto si existe.
	 */
	@Override
	public ProductoEntity obtenerProducto(Long id) {
		Optional<ProductoEntity> prodOp = productRepository.findById(id);
		if (prodOp.isPresent()) {
			return prodOp.get();
		}
		return null;
	}

	/**
	 * Guarda un nuevo producto en la base de datos.
	 *
	 * @param producto El producto a guardar.
	 * @return El producto guardado.
	 */
	@Override
	public ProductoEntity crearProdcuto(ProductoEntity producto) {
		return productRepository.save(producto);
	}

	/**
	 * Actualiza un producto existente.
	 *
	 * @param id                  ID del producto a actualizar.
	 * @param productoActualizado Objeto con los datos actualizados.
	 * @return Un Optional con el producto actualizado si el producto original fue
	 *         encontrado.
	 */
	@Override
	public ProductoEntity actualizarProdcuto(Long id, ProductoEntity productoActualizado) {
		return productRepository.findById(id).map(p -> {
			p.setName(productoActualizado.getName());
			p.setDescription(productoActualizado.getDescription());
			p.setPrice(productoActualizado.getPrice());
			p.setStock(productoActualizado.getStock());
			p.setCategory(productoActualizado.getCategory());
			return productRepository.save(p);
		}).orElseThrow(() -> new RuntimeException("Producto no encontrado con id: " + id));
	}

	/**
	 * Elimina un producto por su ID.
	 *
	 * @param id ID del producto a eliminar.
	 * @return true si el producto fue eliminado; false si no existía.
	 */
	@Override
	public void eliminarProductos(Long id) {
		if (productRepository.existsById(id)) {
			productRepository.deleteById(id);
		}
	}

}
