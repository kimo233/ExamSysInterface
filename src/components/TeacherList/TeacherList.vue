<template>
    <div>
        <span>请输入老师id</span>
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
import{GetALLteachersInfo,teacherGetInfo} from "@/api/teacherApi"
import ref from 'vue'
     export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            getinfobyId(){
                this.TeacherID=this.id
                 let res1 = teacherGetInfo(StudentID)  
                 console.log(res1)
                 this.TeacherList=res1  //补充

            }

        },
        data(){
            let TeacherList= ref([])
            var TeacherID
        },
        async mounted(){
            let res =await GetALLteachersInfo()
            console.log(res)
            //注意，TeacherList 格式是一个对象数组，注意将模板的prop替换
            for(var i=0;i<res.data.msg.length;i++){
              TeacherList.push(res.data.msg[i])
            }  //补充
        }
     }
</script>