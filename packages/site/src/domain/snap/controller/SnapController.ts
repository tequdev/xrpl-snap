import { config } from '../../../common/config';
import type { MetamaskRepository } from '../../../data_access/repository/metamask/MetamaskRepository';
import type State from '../../common/State';
import type { ISnapState } from '../state/snapState';
import { DomainEvents } from 'domain/events';

export default class SnapController {
  constructor(
    public readonly snapState: State<ISnapState>,
    private readonly metamaskRepository: MetamaskRepository,
  ) {}

  async onInit(): Promise<void> {
    await this.recoverMetamaskState();
  }

  async install() {
    await this.metamaskRepository.requestSnap(config.snapOrigin);
    this.snapState.setState({
      isSnapInstalled: true,
      isMetamaskInstalled: true,
    });
  }

  async recoverMetamaskState() {
    if (!this.metamaskRepository.provider) {
      return;
    }
    const installedSnaps = await this.metamaskRepository.getSnaps();
    const isSnapInstalled = installedSnaps[config.snapOrigin] !== undefined;
    this.snapState.setState({
      isMetamaskInstalled: true,
      isSnapInstalled,
    });
    if (isSnapInstalled) {
      DomainEvents.snap.emit('onSpanInitialized');
    }
  }
}
