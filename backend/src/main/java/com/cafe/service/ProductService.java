package com.cafe.service;

import java.util.List;

import com.cafe.entity.ProductoEntity;


public interface ProductService {
	
	List<ProductoEntity> obtenerProductos();
	ProductoEntity obtenerProducto(Integer id);
	ProductoEntity crearProdcuto(ProductoEntity producto);
	ProductoEntity actualizarProdcuto(ProductoEntity producto);
	Void eliminarProductos(Integer id);
}
