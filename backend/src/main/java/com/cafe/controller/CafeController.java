package com.cafe.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cafe.entity.ProductoEntity;
import com.cafe.service.ProductService;

@RestController
@RequestMapping("/")
public class CafeController {
	
	private final ProductService productService;
	
	public CafeController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping("/{id}")
	public ResponseEntity<ProductoEntity> obtenerBoleta(@PathVariable(value = "id") Integer id) {

		return new ResponseEntity<>(productService.obtenerProducto(id), HttpStatus.OK);
	}
}