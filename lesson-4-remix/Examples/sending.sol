        //transfer  payable(msg.sender) = payable address
        payable(msg.sender).transfer(address(this).balance);
        //send
        bool sendSuccess =payable(msg.sender).send(address(this).balance);
        require(sendSuccess,"Send failed");

        // call
       (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess,"Call failed");