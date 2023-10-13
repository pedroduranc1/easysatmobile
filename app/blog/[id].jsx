import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ContainerFondo from "../../src/components/ui/ContainerFondo";
import TobBarOptions from "../../src/components/ui/TobBarOptions";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { BlogsCtrl } from "../../src/api/blogs/fb.blogs";
import AutorInfo from "../../src/components/ui/AutorInfo";
import MarkdownDisplay from "react-native-markdown-display";
import { StyleSheet } from "react-native";

const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
  heading2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
  },
  link: {
    color: "blue",
    marginVertical: 10,
  },
  listUnordered: {
    paddingLeft: 15,
    marginVertical: 10,
  },
  listUnorderedItemIcon: {
    fontSize: 6,
    marginVertical: 10,
  },
  text: {
    color: "white",
    marginVertical: 10,
  },
  paragraph: {
    color: "white",
    marginVertical: 10,
  },
  // ... Add styles for other markdown elements as needed.
});

const BlogsCl = new BlogsCtrl();

const BlogPage = () => {
  const { id } = useLocalSearchParams();
  const [Markdown, setMarkdown] = useState(null);

  const queryCl = useQueryClient();
  const blog = JSON.parse(queryCl.getQueryData(id));

  const mutation = useMutation((md) => BlogsCl.getBlogMDX(md), {
    onSuccess: (mdx) => {
      setMarkdown(mdx);
    },
  });

  useEffect(() => {
    if (!Markdown) {
      const md = blog.blogFileName;
      mutation.mutate(md);
    }
  }, []);

  return (
    <ContainerFondo>
      <View className="flex flex-1 w-full h-full ">
        <View className="relative">
          <TobBarOptions />
          <ScrollView className="mb-[20%]  w-full h-full">
          <Text className="text-white text-xl font-bold my-[5%] w-[90%] mx-auto">
            BlogPage: {blog?.Titulo}
          </Text>
          <AutorInfo id={blog?.Autor} />
          {!Markdown ? (
            <Text>Cargando Blog...</Text>
          ) : (
            <View className="w-[90%] h-full pb-[30%] " style={{ alignSelf: "center" }}>
              <MarkdownDisplay style={markdownStyles}>
                {Markdown}
              </MarkdownDisplay>
            </View>
          )}
          </ScrollView>
        </View>
      </View>
    </ContainerFondo>
  );
};

export default BlogPage;
