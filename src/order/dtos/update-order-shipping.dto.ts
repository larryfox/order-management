import { IsOptional, IsString } from 'class-validator';

export class UpdateOrderShippingDto {
  @IsString()
  @IsOptional()
  trackingId?: string;

  @IsString()
  @IsOptional()
  shippingProvider?: string;
}
