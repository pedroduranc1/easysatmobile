import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { BlogsCtrl } from "../../src/api/blogs/fb.blogs";
import { useQuery } from "react-query";
import AutorCard from "../../src/components/ui/AutorCard";

const BlogsCtl = new BlogsCtrl();
const blogs = () => {
  const { data: blogs, isLoading } = useQuery("blogs", () =>
    BlogsCtl.getBlogs()
  );

  return (
    <ContainerFondo>
      <View className="flex flex-1 w-full h-full ">
        <View className="relative flex justify-center items-center">
          <TobBarOptions />
          <Text className="text-white w-[90%] font-bold text-2xl my-2">
            Blogs
          </Text>

          {isLoading ? (
            <>
              <Text>Cargando...</Text>
            </>
          ) : (
            <>
              <FlatList
                data={blogs}
                style={{width:'90%',height:'100%'}}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="flex items-center bg-white py-2 flex-row mx-auto h-auto rounded-md w-full mt-10 shadow-lg"
                  >
                    <Image
                      source={{ uri: item?.blog_img }}
                      style={{ objectFit: "contain" }}
                      className="w-[30%] h-full"
                    />
                    <View className="w-[60%] flex justify-center items-center">
                      <View className='w-full'>
                      <Text className="text-[12px]">{item?.Titulo}</Text>

                      </View>
                      <AutorCard id={item?.Autor} />
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item?.Slug}
                // Props adicionales que podrías necesitar
                // refreshing={...} // Para pull to refresh
                // onRefresh={...}  // Función a llamar cuando se hace pull to refresh
                // etc.
              />
            </>
          )}
        </View>
      </View>
    </ContainerFondo>
  );
};

export default blogs;
