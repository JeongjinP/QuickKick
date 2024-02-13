//package com.springboot.springboot_back;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//import javax.sql.DataSource;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//@SpringBootApplication
//public class DBQuery {
//
//    @Autowired
//    private DataSource datasource;
//    void contextLoads() throws Exception {
//        Connection conn = datasource.getConnection();
//
//        String sql = "Select * from Login";
//
//        PreparedStatement pstmt = conn.prepareStatement(sql);
////        pstmt.setString(1, receivedId);
////        pstmt.setString(2, rerceivedPassword);
//
//        ResultSet resultSet = pstmt.executeQuery(sql);
//
//        while(resultSet.next()) {
//            Integer ID = resultSet.getInt("ID");
//            String password = resultSet.getString("password");
//            MemberDTO memberDTO = new MemberDTO(ID, password);
//            System.out.println("memberDTD = " + memberDTO);
//        }
//
//        pstmt.close();
//        conn.close();
//    }
//}
