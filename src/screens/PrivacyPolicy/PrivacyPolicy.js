import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from '../../styles/Style';
import {COLORS, PADDINGS} from '../../constants/Constants';
import { HeaderNavigation } from '../../components/headerNavigation/HeaderNavigation';

const PrivacyPolicy = ({navigation}) => {
  return (
    
      <View
        style={[
          style.bigContainer,
          {paddingBottom: PADDINGS.lgPadding},
        ]}>
          <HeaderNavigation
        title="سياسة الخصوصيه"
        color={COLORS.darkGray3}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style.textContent}>
          قام فريق DOCLIN ببناء تطبيق DOCLIN كتطبيق مجاني. يتم توفير هذه الخدمة
          من قبل فريق DOCLIN بدون تكلفة وهي مخصصة للاستخدام كما هي. تُستخدم هذه
          الصفحة لإبلاغ الزوار بشأن سياساتي بجمع المعلومات الشخصية واستخدامها
          والكشف عنها إذا قرر أي شخص استخدام خدمتي. إذا اخترت استخدام خدمتي ،
          فأنت توافق على جمع واستخدام المعلومات فيما يتعلق بهذه السياسة. يتم
          استخدام المعلومات الشخصية التي أجمعها لتوفير الخدمة وتحسينها. لن
          أستخدم أو أشارك معلوماتك مع أي شخص باستثناء ما هو موضح في سياسة
          الخصوصية هذه. المصطلحات المستخدمة في سياسة الخصوصية هذه لها نفس
          المعاني كما في الشروط والأحكام الخاصة بنا ، والتي يمكن الوصول إليها في
          DOCLIN ما لم يتم تحديد خلاف ذلك في سياسة الخصوصية هذه. جمع المعلومات
          واستخدامها للحصول على تجربة أفضل ، أثناء استخدام خدمتنا ، قد أطلب منك
          تزويدنا ببعض المعلومات الشخصية. سيتم الاحتفاظ بالمعلومات التي أطلبها
          على جهازك ولن أقوم بجمعها بأي شكل من الأشكال. يستخدم التطبيق خدمات
          الطرف الثالث التي قد تجمع المعلومات المستخدمة لتحديد هويتك. رابط إلى
          سياسة الخصوصية لمقدمي خدمة الطرف الثالث التي يستخدمها التطبيق خدمات
          Google Play تسجيل البيانات أريد أن أبلغك أنه كلما استخدمت خدمتي, في
          حالة حدوث خطأ في التطبيق ، أقوم بجمع البيانات والمعلومات ( من خلال
          منتجات الجهات الخارجية ) على هاتفك تسمى Log Data. قد تتضمن بيانات
          السجل هذه معلومات مثل بروتوكول الإنترنت لجهازك ( “ IP ” ) العنوان ،
          اسم الجهاز ، إصدار نظام التشغيل ، تكوين التطبيق عند استخدام خدمتي, وقت
          وتاريخ استخدامك للخدمة وإحصاءات أخرى. ملفات تعريف الارتباط ملفات تعريف
          الارتباط هي ملفات تحتوي على كمية صغيرة من البيانات التي يتم استخدامها
          بشكل شائع كمعرفات فريدة مجهولة. يتم إرسالها إلى متصفحك من مواقع الويب
          التي تزورها ويتم تخزينها على الذاكرة الداخلية لجهازك. لا تستخدم هذه
          الخدمة ملفات تعريف الارتباط “ ” بشكل صريح. ومع ذلك ، قد يستخدم التطبيق
          رمزًا ومكتبات تابعة لجهات خارجية تستخدم ملفات تعريف الارتباط “ ” لجمع
          المعلومات وتحسين خدماتها. لديك خيار إما قبول أو رفض ملفات تعريف
          الارتباط هذه ومعرفة متى يتم إرسال ملف تعريف ارتباط إلى جهازك. إذا
          اخترت رفض ملفات تعريف الارتباط الخاصة بنا ، فقد لا تتمكن من استخدام
          بعض أجزاء هذه الخدمة. مقدمي الخدمة يجوز لي توظيف شركات وأفراد من أطراف
          ثالثة للأسباب التالية: لتسهيل خدمتنا; لتقديم الخدمة نيابة عنا; لأداء
          الخدمات المتعلقة بالخدمة ؛ أو لمساعدتنا في تحليل كيفية استخدام خدمتنا.
          أريد إبلاغ مستخدمي هذه الخدمة أن هذه الأطراف الثالثة يمكنها الوصول إلى
          معلوماتهم الشخصية. والسبب هو أداء المهام الموكلة إليهم نيابة عنا. ومع
          ذلك ، فإنهم ملزمون بعدم الكشف عن المعلومات أو استخدامها لأي غرض آخر.
          الأمان أقدر ثقتك في تزويدنا بمعلوماتك الشخصية ، وبالتالي فإننا نسعى
          جاهدين لاستخدام وسائل مقبولة تجاريًا لحمايتها. ولكن تذكر أنه لا توجد
          طريقة للإرسال عبر الإنترنت ، أو طريقة للتخزين الإلكتروني آمنة وموثوقة
          بنسبة 100٪ ، ولا يمكنني ضمان أمنها المطلق. روابط لمواقع أخرى قد تحتوي
          هذه الخدمة على روابط لمواقع أخرى. إذا قمت بالنقر فوق ارتباط جهة خارجية
          ، فسيتم توجيهك إلى هذا الموقع. لاحظ أن هذه المواقع الخارجية لا يتم
          تشغيلها من قبلي. لذلك ، أنصحك بشدة بمراجعة سياسة الخصوصية لهذه
          المواقع. ليس لدي أي سيطرة ولا أتحمل أي مسؤولية عن المحتوى أو سياسات
          الخصوصية أو ممارسات أي مواقع أو خدمات تابعة لجهات خارجية. خصوصية
          الأطفال لا تعالج هذه الخدمات أي شخص يقل عمره عن 13 عامًا. لا أقوم بجمع
          معلومات تحديد الهوية الشخصية عن علم من الأطفال دون سن 13 عامًا. في
          حالة اكتشاف أن طفلًا دون سن 13 عامًا قد زودني بمعلومات شخصية ، أحذف
          هذا على الفور من خوادمنا. إذا كنت أحد الوالدين أو الوصي وأنت على دراية
          بأن طفلك قد زودنا بمعلومات شخصية ، يرجى الاتصال بي حتى أتمكن من القيام
          بالإجراءات اللازمة. التغييرات على سياسة الخصوصية هذه يمكنني تحديث
          سياسة الخصوصية الخاصة بنا من وقت لآخر. وبالتالي ، ننصح بمراجعة هذه
          الصفحة بشكل دوري لأي تغييرات. سأبلغك بأي تغييرات عن طريق نشر سياسة
          الخصوصية الجديدة في هذه الصفحة. هذه السياسة فعالة اعتبارًا من
          2023-05-07 اتصل بنا إذا كان لديك أي أسئلة أو اقتراحات حول سياسة
          الخصوصية الخاصة بي ، فلا تتردد في الاتصال بي على
          doctorapp047@gmail.com.
        </Text>
        </ScrollView>

      </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
