// TODO:IRouteComponentProps
import { Button, ConfigProvider } from 'antd';
import React from 'react';
import { IRouteComponentProps } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';

function GlobalLayout(props: IRouteComponentProps) {
  const { children } = props;

  return <ConfigProvider locale={zhCN}></ConfigProvider>;
}
