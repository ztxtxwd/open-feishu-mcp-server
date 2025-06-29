import { FEISHU_CONSTANTS } from '../../../config/feishu-constants';

export function get补全后的文本绘图块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.MERMAID_DRAWING;

  const theme = params.data.children[0].mermaid_drawing.theme || FEISHU_CONSTANTS.THEMES.DEFAULT;
  const record = JSON.stringify({
    data: params.data.children[0].mermaid_drawing.drawing_data,
    theme,
    view: 'chart',
  });

  const blockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: blockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的名词解释块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.GLOSSARY;

  // 构建名词解释的数据结构，参考您提供的示例数据
  const setting = {
    columns: [
      {
        dataIndex: 'name',
        fixed: 'left',
        minWidth: 84,
        name: 'name',
        width: 210,
      },
      {
        dataIndex: 'desc',
        minWidth: 124,
        name: 'desc',
        width: 400,
      },
    ],
    mode: 'glossary',
  };

  // 转换术语列表格式
  const list = params.data.children[0].glossary.terms.map((term: any) => ({
    name: term.name,
    alias: term.alias || '',
    desc: term.desc,
    docs: term.docs || [],
    images: term.images || [],
    links: term.links || [],
  }));

  const record = JSON.stringify({
    setting,
    list,
  });

  const blockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: blockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的时间轴块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.TIMELINE;

  // 构建时间轴的数据结构，参考您提供的示例数据
  const blockId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // 默认内容显示配置
  const contentShow = {
    text: true,
    time: true,
    title: true,
    ...params.data.children[0].timeline.content_show,
  };

  // 转换时间轴项目格式
  const items = params.data.children[0].timeline.items.map((item: any) => ({
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: item.title,
    time: item.time,
    text: item.text,
  }));

  const mode = params.data.children[0].timeline.mode || 'horizontal_alternating';

  const record = JSON.stringify({
    blockId,
    contentShow,
    items,
    mode,
  });

  const parentBlockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的目录导航块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.CATALOG_NAVIGATION;

  // 构建目录导航的数据结构，参考您提供的示例数据
  const catalogNav = params.data.children[0].catalog_navigation;

  // 设置默认配置
  const ignoreCataLogRecordIds = catalogNav.ignore_catalog_record_ids || [];
  const isShowAllLevel = catalogNav.is_show_all_level !== undefined ? catalogNav.is_show_all_level : true;
  const showCataLogLevel = catalogNav.show_catalog_level || 3;
  const viewType = catalogNav.view_type || 'normal';

  const record = JSON.stringify({
    ignoreCataLogRecordIds,
    isShowAllLevel,
    showCataLogLevel,
    viewType,
  });

  const parentBlockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的信息收集块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.INFORMATION_COLLECTION;

  // 构建信息收集的数据结构，参考您提供的示例数据
  const infoCollection = params.data.children[0].information_collection;

  // 设置默认配置，参考示例数据格式
  const config = {
    afterText: infoCollection.config.afterText || '标为了已读',
    beforText: infoCollection.config.beforText || '标为已读',
    color: infoCollection.config.color || 'GREEN',
    icon: infoCollection.config.icon || 'CHECK',
    readType: infoCollection.config.readType || 1,
    selectVal: infoCollection.config.selectVal || 0,
  };

  const record = JSON.stringify({
    config,
  });

  const parentBlockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的倒计时块参数(params: any) {
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.COUNTDOWN;

  const countdown = params.data.children[0].countdown;

  const record = JSON.stringify({
    color: countdown.color,
    duration: countdown.duration,
    startTime: countdown.startTime,
  });

  const parentBlockId = params.path.block_id || params.path.document_id;
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  };
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  };
  return {
    params: {},
    data,
    path,
  };
}

export function get补全后的附件块参数(params: any) {
  const file = {
    token: '',
  };
  params.data.children[0].file = file;
  return params;
}