package com.cafe.repositoy;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cafe.entity.ProductoEntity;

public interface ProductoRepository extends JpaRepository<ProductoEntity, Integer> {

}
