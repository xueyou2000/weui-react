import React, { useState } from "react";
import Page from "site/components/Page";
import { SearchPanel } from "weui-react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const DefaultBanks = ["建设银行", "农业银行"];

function Searchdemo({ history }: RouteComponentProps) {
    const [banks, setBanks] = useState(DefaultBanks);

    function searchBanks(str: string) {
        if (str) {
            setBanks([str + "银行", ...DefaultBanks]);
        } else {
            setBanks(DefaultBanks);
        }
    }

    return (
        <Page title="Search" introduce="搜索">
            <SearchPanel visible={true} data={banks} onSearch={searchBanks} onConfirm={() => history.goBack()}>
                {(d) => <span>{d}</span>}
            </SearchPanel>
        </Page>
    );
}

export default withRouter(Searchdemo);
