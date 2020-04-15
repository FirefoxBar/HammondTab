import * as React from 'react';
import './index.less';
import { Balloon, Input, Button, List, Select, Dialog, Form, Switch, Tab } from '@alifd/next';
import Icon from 'share/components/icon';

const Tooltip = Balloon.Tooltip;

const formItemLayout = {
  labelCol: {
    fixedSpan: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

interface LayoutItem {
  column: number;
  title: string;
}
const layoutList: LayoutItem[][] = [
  [
    {
      column: 1,
      title: '测试',
    },
  ],
  [
    {
      column: 3,
      title: '测试',
    },
    {
      column: 1,
      title: '测试',
    },
  ],
  [
    {
      column: 2,
      title: '测试',
    },
    {
      column: 3,
      title: '测试',
    },
    {
      column: 4,
      title: '测试',
    },
  ],
];

interface OptionsState {
  s: number;
}
export default class Options extends React.Component<any, OptionsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      s: 0,
    };
  }

  render() {
    return (
      <div className="page-options">
        <div className="sidebar">
          <Tab>
            <Tab.Item
              title={
                <Tooltip
                  trigger={
                    <div className="button active">
                      <Icon type="layout" />
                    </div>
                  }
                  align="b"
                >
                  主页布局
                </Tooltip>
              }
              key="layout"
            >
              <div className="panel layout">
                <div className="panel-title">主页布局</div>
                <div className="panel-content">
                  <div className="layout-item">
                    <Input.Group
                      addonAfter={
                        <Button className="btn-icon">
                          <Icon type="delete" />
                        </Button>
                      }
                    >
                      <Input />
                    </Input.Group>
                  </div>
                  <div className="layout-item">
                    <Input.Group
                      addonAfter={
                        <Button className="btn-icon">
                          <Icon type="delete" />
                        </Button>
                      }
                    >
                      <Input />
                    </Input.Group>
                  </div>
                  <Button className="button-add">
                    <Icon type="add" />
                    添加一行
                  </Button>
                  <Button className="button-apply" type="secondary">
                    应用
                  </Button>
                </div>
              </div>
            </Tab.Item>
            <Tab.Item
              title={
                <Tooltip
                  trigger={
                    <div className="button">
                      <Icon type="extension" />
                    </div>
                  }
                  align="b"
                >
                  已安装扩展
                </Tooltip>
              }
              key="extension"
            >
              <div className="panel extension">
                <div className="panel-title">已安装扩展</div>
                <div className="panel-content">
                  <List className="extension-list">
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            安装
                          </Button>
                        </div>
                      }
                      title="vuepress-plugin-auto-sidebar"
                    >
                      <p>A vuepress plugin for generate sidebar</p>
                      <p>
                        <small>shanyuhai123 1.4.1 17 days ago</small>
                      </p>
                    </List.Item>
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            安装
                          </Button>
                        </div>
                      }
                      title="vuepress-plugin-auto-sidebar"
                    >
                      <p>A vuepress plugin for generate sidebar</p>
                      <p>
                        <small>shanyuhai123 1.4.1 17 days ago</small>
                      </p>
                    </List.Item>
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            安装
                          </Button>
                        </div>
                      }
                      title="vuepress-plugin-auto-sidebar"
                    >
                      <p>A vuepress plugin for generate sidebar</p>
                      <p>
                        <small>shanyuhai123 1.4.1 17 days ago</small>
                      </p>
                    </List.Item>
                  </List>
                </div>
              </div>
            </Tab.Item>
            <Tab.Item
              title={
                <Tooltip
                  trigger={
                    <div className="button">
                      <Icon type="store" />
                    </div>
                  }
                  align="b"
                >
                  扩展市场
                </Tooltip>
              }
              key="store"
            >
              <div className="panel store">
                <div className="panel-title">扩展市场</div>
                <div className="panel-content" />
              </div>
            </Tab.Item>
            <Tab.Item
              title={
                <Tooltip
                  trigger={
                    <div className="button">
                      <Icon type="storage" />
                    </div>
                  }
                  align="b"
                >
                  导入和导出
                </Tooltip>
              }
              key="storage"
            >
              <div className="panel storage active">
                <div className="panel-title">本地文件</div>
                <div className="panel-content local">
                  <Button>
                    <Icon type="upload" />
                    导入
                  </Button>
                  <Button>
                    <Icon type="download" />
                    导出
                  </Button>
                </div>
                <div className="panel-title">云存储</div>
                <div className="panel-content">
                  <Select>
                    <Select.Option value="google">Google Drive</Select.Option>
                    <Select.Option value="onedrive">OneDrive</Select.Option>
                  </Select>
                  <List className="file-list">
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            下载
                          </Button>
                        </div>
                      }
                    >
                      123456.json
                    </List.Item>
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            下载
                          </Button>
                        </div>
                      }
                    >
                      123456.json
                    </List.Item>
                    <List.Item
                      className="item"
                      extra={
                        <div className="extra">
                          <Button text type="primary">
                            下载
                          </Button>
                        </div>
                      }
                    >
                      123456.json
                    </List.Item>
                  </List>
                </div>
              </div>
            </Tab.Item>
            <Tab.Item
              title={
                <Tooltip
                  trigger={
                    <div className="button">
                      <Icon type="setting" />
                    </div>
                  }
                  align="b"
                >
                  应用设置
                </Tooltip>
              }
              key="setting"
            >
              <div className="panel setting">
                <div className="panel-title">应用设置</div>
                <div className="panel-content" />
              </div>
            </Tab.Item>
          </Tab>
        </div>
        <div className="page-content">
          <div className="layout">
            {layoutList.map((row, rowIndex) => {
              const totalColumn = row.map(it => it.column).reduce((prev, cur) => prev + cur);
              let curColumn = 1;
              return (
                <div
                  className="row"
                  key={rowIndex}
                  style={{
                    gridTemplateColumns: `repeat(${totalColumn}, 1fr)`,
                  }}
                >
                  {row.map((column, idx) => {
                    curColumn += column.column;
                    return (
                      <div
                        className="column"
                        key={idx}
                        style={{
                          gridColumnStart: curColumn - column.column,
                          gridColumnEnd: curColumn,
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <Dialog className="setting-dialog" visible={false}>
          <Tab>
            <Tab.Item title="容器设置" key="container">
              <Form {...formItemLayout} labelAlign="left">
                <Form.Item label="组件">
                  <Select />
                </Form.Item>
                <Form.Item label="名称">
                  <Input />
                </Form.Item>
                <Form.Item label="显示标题栏">
                  <Switch />
                </Form.Item>
                <Form.Item label="边距">
                  <Input />
                </Form.Item>
              </Form>
            </Tab.Item>
            <Tab.Item title="扩展设置" key="extension">
              Doc content
            </Tab.Item>
          </Tab>
        </Dialog>
      </div>
    );
  }
}
