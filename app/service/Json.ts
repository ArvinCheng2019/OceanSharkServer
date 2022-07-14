import { Service } from 'egg';
import { find } from 'lodash';
import fish from '../Json/FishConfig.json';
// 其他的配置文件还没有加入

// 这里主要是考虑 如果性能来的及，就将鱼的升级信息用服务器计算
export default class JsonData extends Service {

  public async findFishWithName(fishName:string) {
    return find(fish.FishConfig, item => item.Name === fishName);
  }
}
