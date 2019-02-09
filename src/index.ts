import FundamentalVuePlugin from '@/components';
import Directives from '@/directives';
import { PluginFunction } from 'vue';
import {
  RawPluginOptions,
  normalizedPluginOptions,
} from '@/util/PluginOptions';
import { log } from '@/core';
import { version, libName } from '@/config';

const plugin: PluginFunction<RawPluginOptions> = (vue, options) => {
  const normalized = normalizedPluginOptions(options);
  vue.use(Directives, normalized);
  vue.use(FundamentalVuePlugin, normalized);
  if (normalized.log.welcome) {
    log(
      `%c Welcome to ${libName} %c Detected v${version} %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#1661be ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent',
    );
  }
};

export default plugin;
