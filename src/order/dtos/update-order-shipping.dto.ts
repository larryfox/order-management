import { IsString } from 'class-validator';

export class UpdateOrderShippingDto {
  @IsString()
  trackingId?: string;

  @IsString()
  shippingProvider?: string;
}
