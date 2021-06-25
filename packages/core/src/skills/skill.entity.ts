import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { IEmployee, ISkill } from '@gauzy/contracts';
import { ApiProperty } from '@nestjs/swagger';
import {
	Employee,
	TenantOrganizationBaseEntity
} from '../core/entities/internal';

@Entity('skill')
export class Skill extends TenantOrganizationBaseEntity implements ISkill {
	@ApiProperty({ type: () => String })
	@Column()
	name?: string;

	@ApiProperty({ type: () => String })
	@Column({ nullable: true })
	description?: string;

	@ApiProperty({ type: () => String })
	@Column()
	color?: string;

	@ManyToMany(() => Employee, (employee) => employee.skills)
	@JoinTable({
		name: 'skill_employee'
	})
	employees?: IEmployee[];
}
