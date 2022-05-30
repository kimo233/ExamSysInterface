<template>
    
    <div>
        <span>请输入学生id</span>
        <input v-model="id" type="text">
        <input @click="getinfobyId()" type="button" name="确定" id="">
    </div>
  <el-table
    :data="TeacherList"
    
    style="width: 100%">
    <el-table-column
      
      prop="id"
      label="id"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="pictureURL"
      label="照片"
      width="120">
    </el-table-column>
    <el-table-column
      prop="academy"
      label="学院"
      width="300">
    </el-table-column>
    <el-table-column
      prop="major"
      label="专业"
      width="300">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';
import{GetAllStudentsInfo,studentGetInfo } from "@/api/studentApi"
import ref from 'vue'
     export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            getinfobyId(){
                this.StudentID=this.id
                 let res1 = studentGetInfo(StudentID)  
                 console.log(res1)
                 this.StudentList=res1  //补充

            }
        },
        data(){
            let StudentList=ref([])
            var StudentID
        },
        async mounted(){
            let res =await GetAllStudentsInfo
            console.log(res)
            //注意，StudentList 格式是一个对象数组，注意将模板的prop替换
            this.StudentList=res    //补充
        }
        
     }
</script>