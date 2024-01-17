import { ICurrency } from '@gauzy/contracts';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Index } from 'typeorm';
import { BaseEntity } from '../core/entities/internal';
import { Entity } from '@gauzy/common';

@Entity('currency')
export class Currency extends BaseEntity implements ICurrency {
	@ApiProperty({ type: () => String })
	@Index()
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: false })
	isoCode: string;

	@ApiProperty({ type: () => String })
	@IsString()
	@IsNotEmpty()
	@Column({ nullable: false })
	currency: string;
}
