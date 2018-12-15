export class T2tDecoderProcessManager {

  private static instance: T2tDecoderProcessManager;

  processCount: number;

  static getInstance(): T2tDecoderProcessManager {
    if ( ! T2tDecoderProcessManager.instance) {
      T2tDecoderProcessManager.instance = new T2tDecoderProcessManager();
    }
    return T2tDecoderProcessManager.instance;
  }

  private constructor() {
    this.processCount = 0;
  }
}
