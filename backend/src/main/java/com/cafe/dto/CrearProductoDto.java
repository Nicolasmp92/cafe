package com.cafe.dto;

import lombok.Data;

@Data
public class CrearProductoDto {

    private String name;
    private String description;
    private Double price;
    private Integer stock;
    private Categoria category;
}
