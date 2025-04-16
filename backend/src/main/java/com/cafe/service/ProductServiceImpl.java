package com.cafe.service;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

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

	@Override
	public List<ProductoEntity> obtenerProductos() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ProductoEntity obtenerProducto(Integer id) {
		Optional<ProductoEntity> prodOp = productRepository.findById(id);
		if(prodOp.isPresent()) {
			return prodOp.get();
		}
		return null;
	}

	@Override
	public ProductoEntity crearProdcuto(ProductoEntity producto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ProductoEntity actualizarProdcuto(ProductoEntity producto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Void eliminarProductos(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}


		

}
