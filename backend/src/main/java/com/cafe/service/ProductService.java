package com.cafe.service;

import java.util.List;

import com.cafe.entity.ProductoEntity;


public interface ProductService {
	
	List<ProductoEntity> obtenerProductos();
	ProductoEntity obtenerProducto(Long id);
	ProductoEntity crearProdcuto(ProductoEntity producto);
	ProductoEntity actualizarProdcuto(Long id, ProductoEntity producto);
	void eliminarProductos(Long id);
}
