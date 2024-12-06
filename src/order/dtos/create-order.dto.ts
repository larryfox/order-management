import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  lineItems: CreateLineItemDto[];
}

class CreateLineItemDto {
  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsInt()
  @IsPositive()
  quantity: number;
}
