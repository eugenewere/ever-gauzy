import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { IIntegrationMapSyncRepository, IOrganizationGithubRepository } from '@gauzy/contracts';
import { TenantAwareCrudService } from '@gauzy/core';
import { OrganizationGithubRepository } from './github-repository.entity';
import { IntegrationSyncGithubRepositoryCommand } from '../commands';
import {
	MikroOrmOrganizationGithubRepositoryRepository,
	TypeOrmOrganizationGithubRepositoryRepository
} from './repository';

@Injectable()
export class GithubRepositoryService extends TenantAwareCrudService<OrganizationGithubRepository> {
	private readonly logger = new Logger('GithubRepositoryService');

	constructor(
		private readonly _commandBus: CommandBus,
		typeOrmOrganizationGithubRepositoryRepository: TypeOrmOrganizationGithubRepositoryRepository,
		mikroOrmOrganizationGithubRepositoryRepository: MikroOrmOrganizationGithubRepositoryRepository
	) {
		super(typeOrmOrganizationGithubRepositoryRepository, mikroOrmOrganizationGithubRepositoryRepository);
	}

	/**
	 * Synchronize a GitHub repository with an integration.
	 *
	 * @param input - The input data for synchronization.
	 * @returns An object indicating success or failure of the synchronization.
	 */
	async syncGithubRepository(input: IIntegrationMapSyncRepository): Promise<IOrganizationGithubRepository> {
		try {
			return await this._commandBus.execute(new IntegrationSyncGithubRepositoryCommand(input));
		} catch (error) {
			// Handle errors and return an appropriate error response
			this.logger.error('Error while sync github integration repository', error.message);
			throw new HttpException(`Failed to sync GitHub repository: ${error.message}`, HttpStatus.BAD_REQUEST);
		}
	}
}
