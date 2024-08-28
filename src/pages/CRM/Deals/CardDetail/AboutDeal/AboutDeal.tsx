import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
import { Button, Loading } from 'common/ui';
import { AccessChangeble, Tabs } from 'common/components';
import { ITabsItem } from 'common/components/Tabs/Tabs.helper';
import { useAppSelector, useNotify } from 'common/hooks';
import { MESSAGE } from 'common/constants';
import { employeesSelectors } from 'api/admin/employees/employees.selectors';
import { useLazyGetLeadCalcQuery, useUpdateLeadCalcAccessMutation } from 'api/admin/leads/endpoints/calculator';
import { IComment, ICreateLeadParams, ICreateReminderParams } from 'types/entities';
import { ICalculator } from 'types/entities/leads';
import { ROLES } from 'types/roles';
import { TAB_COMPONENTS } from './AboutDeal.helper';
import { Accounts } from './Accounts';
import { Calculator } from './Calculator';
import { DealsForm } from './DealsForm';
import { Todo } from './Todo';
import styles from './styles.module.scss';

import { BUTTON_TYPES } from 'types/enums';

interface IProps {
  formData?: ICreateLeadParams;
  reminders?: ICreateReminderParams[];
  comments?: IComment[];
  calcData?: ICalculator;
  colStatus?: number;
}

export const AboutDeal: FC<IProps> = ({ formData, reminders, comments, calcData, colStatus }) => {
  const notify = useNotify();
  const [updateCalcAccess, { isLoading }] = useUpdateLeadCalcAccessMutation();
  const { role } = useAppSelector(employeesSelectors.employees);
  const [getCalc, { data, isFetching }] = useLazyGetLeadCalcQuery();
  const { search } = useLocation();

  useEffect(() => {
    if (search) {
      const leadId = search.substring(1);
      getCalc(leadId);
    }
  }, [getCalc, search]);

  const tabItems: ITabsItem[] = [
    {
      title: 'Дело',
      type: TAB_COMPONENTS.TODO,
      disabled: false
    },
    {
      title: 'Счета',
      type: TAB_COMPONENTS.ACCOUNT,
      disabled: !(data?.additionalPayments?.length || data?.paymentData?.length)
    },
    {
      title: 'Калькулятор',
      type: TAB_COMPONENTS.CALCULATOR,
      disabled: false
    }
  ];

  const [isActiveTab, setIsActiveTab] = useState<string>(tabItems[0].type);
  const isCalculatorTab = isActiveTab === TAB_COMPONENTS.CALCULATOR;
  const isManagement = role === ROLES.DIRECTOR || role === ROLES.SENIOR_MANAGER;

  const getActiveComponent = () => {
    const component = {
      [TAB_COMPONENTS.TODO]: <Todo reminders={reminders} comments={comments} />,
      [TAB_COMPONENTS.ACCOUNT]: <Accounts />,
      [TAB_COMPONENTS.CALCULATOR]: <Calculator calcData={calcData} data={data} />
    };
    return component[isActiveTab as TAB_COMPONENTS];
  };

  const changeAccess = () => {
    if (calcData) {
      updateCalcAccess(calcData.id)
        .unwrap()
        .then(() => {
          notify(MESSAGE.UPDATED, 'success');
        });
    }
  };

  return (
    <Loading isSpin={isFetching}>
      <div className={styles.aboutDeal}>
        {!isCalculatorTab && <DealsForm formProps={formData} colStatus={colStatus} />}
        <div className={cn(styles.rightBlock, { [styles.isCalculatorChild]: isCalculatorTab })}>
          <div className={cn(styles.wrapper, { [styles.isOnlyTab]: !isCalculatorTab })}>
            {isCalculatorTab && (
              <div className={styles.btns_wrapper}>
                {isManagement && <AccessChangeble isAccess={!calcData?.is_closed} isLoading={isLoading} onUpdateAccess={changeAccess} />}
                <Button text='Создать договор' styleType={BUTTON_TYPES.LINK_GRAY} />
              </div>
            )}
            <Tabs tabItems={tabItems} isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} />
          </div>
          <div className={cn(styles.box, { [styles.isDisabled]: isCalculatorTab && calcData?.is_closed })}>{getActiveComponent()}</div>
        </div>
      </div>
    </Loading>
  );
};
