import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) 
    private readonly productRepository: Repository<Product>
  ){}
  async create(createProductDto: CreateProductDto) {
    /* creamos el producto */
    const product = this.productRepository.create(createProductDto)
    /* retornamos el producto guardado */
    return await this.productRepository.save(product)
  }

  async findAll() {
    return await this.productRepository.find()
  }

  async findOne(id: number) {
    return await this.productRepository.findOneBy({id})
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto)
  }

  async remove(id: number) {
    const productDelete = await this.productRepository.findOneBy({id})
    if(productDelete){
      return await this.productRepository.remove(productDelete);
    }
    /* hacemos una eliminacion logica */
    
  }
}
